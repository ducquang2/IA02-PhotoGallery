import { searchIcon } from "../assets";

export { SearchBar };

type SearchBarProps = {
  value: string,
  onSubmit: (value: string) => void
  onChange: (value: string) => void
}

function SearchBar({ value, onSubmit, onChange, ...rest }: SearchBarProps) {
  return (
    <form
      {...rest}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit((e.target as HTMLFormElement).query.value.toString().trim());
      }}>
      <div className="relative text-sm">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img src={searchIcon} className="size-6" alt="search-icon" />
        </div>
        <input
          type="search"
          onChange={(e) => onChange(e.target.value.toString().trim())}
          id="default-search"
          className="block outline-none w-full p-4 pl-10 text-gray-900 rounded-lg bg-gray-50 border focus:border-blue-500"
          placeholder="Search image here..."
          required
          value={value}
          name="query"
        />
        <button
          type="submit"
          className="text-white absolute font-medium rounded-lg px-4 py-2 right-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 hover:shadow-md focus:ring-4 focus:outline-none focus:ring-blue-300 ">
          Search
        </button>
      </div>
    </form>
  );
}
