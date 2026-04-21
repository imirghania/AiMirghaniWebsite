```python {6,10-12} showLineNumbers /skills/#word
from dataclasses import ( dataclass,
                          field )

@dataclass
class AiEngineer:
    name: str = "Ahmed Mirghani"
    skills: list[str] = field(
        default_factory=(
            lambda: [
            "Data Analysis",
            "Computer Vision",
            "Agentic workflows"
            ])
        )
```
