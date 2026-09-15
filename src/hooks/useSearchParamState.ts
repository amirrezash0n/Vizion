import { useSearchParams } from "react-router";

export function useSearchParamState(
  key: string,
  defaultValue: string = "all",
): [string, (value: string) => void] {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get(key) || defaultValue;

  const setValue = (newValue: string) => {
    const newParams = new URLSearchParams(searchParams);

    if (newValue === defaultValue) {
      newParams.delete(key);
    } else {
      newParams.set(key, newValue);
    }

    setSearchParams(newParams);
  };

  return [value, setValue];
}
