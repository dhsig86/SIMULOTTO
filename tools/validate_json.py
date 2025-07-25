import json
import sys
from pathlib import Path

REQUIRED_KEYS = {"banca", "question", "options", "answer", "explanation", "area"}

def main():
    path = Path(__file__).resolve().parents[1] / "data" / "questions.json"
    try:
        with path.open("r", encoding="utf-8") as f:
            data = json.load(f)
    except Exception as e:
        print(f"Failed to load {path}: {e}")
        sys.exit(1)

    if not isinstance(data, list):
        print("questions.json should contain a list")
        sys.exit(1)

    seen_questions = {}
    for idx, item in enumerate(data):
        if not isinstance(item, dict):
            print(f"Item {idx} is not an object")
            sys.exit(1)
        missing = REQUIRED_KEYS - item.keys()
        if missing:
            print(f"Item {idx} is missing keys: {', '.join(sorted(missing))}")
            sys.exit(1)
        question = item.get("question")
        if question in seen_questions:
            first_idx = seen_questions[question]
            print(
                f"Duplicate question at index {idx} (previously defined at index {first_idx})"
            )
            sys.exit(1)
        seen_questions[question] = idx
    print("Validation successful.")

if __name__ == "__main__":
    main()
