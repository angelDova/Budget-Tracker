import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TransactionType } from "@/lib/types";
import { Category } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import React, { useCallback, useEffect, useState } from "react";
import CreateCategoryDialog from "./create-category-dialog";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  type: TransactionType;
  onChange: (calue: string) => void;
}

function CategoryPicker({ type, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!value) return;
    onChange(value); // when the value changes, change the onChange callback
  }, [onChange, value]);

  const categoriesQuery = useQuery({
    queryKey: ["categories", type],
    queryFn: () =>
      fetch(`/api/categories?type=${type}`).then((res) => res.json()),
  });

  const selectCateogry = categoriesQuery.data?.find(
    (category: Category) => category.name === value,
  );

  const successCallback = useCallback(
    (category: Category) => {
      setValue(category.name);
      setOpen((prev) => !prev);
    },
    [setValue, setOpen],
  );

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selectCateogry ? (
            <CateogryRow category={selectCateogry} />
          ) : (
            "Select category"
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <CommandInput placeholder="Search category..." />
          <CreateCategoryDialog type={type} successCallback={successCallback} />
          <CommandEmpty>
            <p className="">Category not found</p>
            <p className="text-xs text-muted-foreground">
              Tip: Create a new category
            </p>
          </CommandEmpty>
          <CommandGroup>
            <CommandList>
              {categoriesQuery.data &&
                categoriesQuery.data.map((category: Category) => (
                  <CommandItem
                    key={category.name}
                    onSelect={() => {
                      setValue(category.name);
                      setOpen((prev) => !prev);
                    }}
                  >
                    <CateogryRow category={category} />
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4 opacity-0",
                        value === category.name && "opacity-100",
                      )}
                    />
                  </CommandItem>
                ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default CategoryPicker;

function CateogryRow({ category }: { category: Category }) {
  return (
    <div className="flex items-center gap-2">
      <span className="" role="img">
        {category.icon}
      </span>
      <span className="">{category.name}</span>
    </div>
  );
}