"""Keep reproducible project output outside tracked examples."""

import json
from importlib.metadata import version
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]


def output_directory(name: str, requested: str | None = None) -> Path:
    directory = Path(requested).expanduser().resolve() if requested else ROOT / '.private' / 'project-runs' / name
    directory.mkdir(parents=True, exist_ok=True, mode=0o700)
    return directory


def package_versions(*packages: str) -> dict[str, str]:
    return {package: version(package) for package in packages}


def publish_result(directory: Path, result: dict[str, Any]) -> None:
    payload = json.dumps(result, indent=2, sort_keys=True, allow_nan=False) + '\n'
    (directory / 'metrics.json').write_text(payload)
    print(payload, end='')
