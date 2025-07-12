const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap  ">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400 "
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400 "
        />
        <select
          name="color"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>Color</option>
          <option value="">Test</option>
        </select>
        <select
          name="size"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>Size: </option>
          <option value="">Test</option>
        </select>
        <select
          name="ribbon"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>Category</option>
          <option value="">New Arrival</option>
          <option value="">Popular</option>
        </select>

        <select
          name="ribbon"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200"
        >
          <option>All Filters</option>
          <option value="">New Arrival</option>
          <option value="">Popular</option>
        </select>
      </div>
      <div className=''>
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium ring-1 ring-gray-400 bg-white"
        >
          <option>Sort By </option>
          <option value={""}>Price (Low to High) </option>
          <option value={""}>Price (High to low) </option>
          <option value={""}>Newest</option>
          <option value={""}>Oldest</option>
            </select>
      </div>
    </div>
  );
};

export default Filter;
