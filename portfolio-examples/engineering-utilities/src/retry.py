import time
from collections.abc import Callable
from typing import TypeVar


T = TypeVar("T")


def retry(
    fn: Callable[[], T],
    attempts: int = 3,
    delay_seconds: float = 0.5,
    backoff: float = 2.0,
    retry_exceptions: tuple[type[Exception], ...] = (Exception,),
) -> T:
    last_error: Exception | None = None
    wait = delay_seconds

    for _ in range(attempts):
        try:
            return fn()
        except retry_exceptions as exc:
            last_error = exc
            time.sleep(wait)
            wait *= backoff

    if last_error is None:
        raise RuntimeError("Retry failed without capturing an exception.")
    raise last_error

