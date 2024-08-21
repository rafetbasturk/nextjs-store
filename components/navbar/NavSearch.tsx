"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function NavSearch() {
  const searchParams = useSearchParams();
  const searchVal = searchParams.get("search");
  const { replace } = useRouter();
  const [search, setSearch] = useState(searchVal?.toString() || "");
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`/products?${params.toString()}`);
  }, 300);

  useEffect(() => {
    if (!searchVal) {
      setSearch("");
    }
  }, [searchVal]);

  return (
    <Input
      type="search"
      placeholder="search product..."
      className="max-w-xs dark:bg-muted"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
    />
  );
}
