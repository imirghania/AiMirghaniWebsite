```python {6,10-12} showLineNumbers /skills/#word
from dataclasses import ( dataclass,
                          field )

@dataclass
class Person:
    name: str = "Ahmed Mirghani"
    skills: list[str] = field(
        default_factory=(
            lambda: [
            "Data Science",
            "Web Development",
            "Desktop Apps"
            ])
        )
```
