"use client";
import React, { useState } from "react";
import SearchAutocomplete from "../common/search-autocomplete";
import LocationInput from "../common/location-input";
import DatePickerInput from "../common/DateRangePickerBox";
import { addDays } from "date-fns";

function Search() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [searchBox, setSearchBox] = useState<any>();
  const [locationInput, setLocationInput] = useState({
    searchedLocation: "",
    searchedPlaceAPIData: [],
  });

  const onLoad = (ref: any) => setSearchBox(ref);
  const onPlacesChanged = () => {
    const places = searchBox?.getPlaces();
    setLocationInput({
      searchedLocation: places && places[0] && places[0].formatted_address,
      searchedPlaceAPIData: places ? places : [],
    });
  };
  return (
    <div className="mx-auto mb-16 mt-40 max-w-7xl  bg-gray px-8  pt-3 md:mt-32">
      <div className="flex justify-center">
        <div className="   rounded bg-white shadow-lg">
          <div className="flex flex-wrap items-center px-4 py-5 xl:flex-nowrap">
            <SearchAutocomplete
              onLoad={onLoad}
              onPlacesChanged={onPlacesChanged}
              loader={
                <LocationInput
                  label="Loading . . ."
                  className="mb-3"
                  disabled
                />
              }
            >
              <LocationInput
                label="Location"
                className="mb-3"
                value={locationInput.searchedLocation || ""}
                onChange={(event) =>
                  setLocationInput({
                    ...locationInput,
                    searchedLocation: event.target.value,
                  })
                }
              />
            </SearchAutocomplete>
            <DatePickerInput
              label="Pick up Date"
              selected={startDate}
              dateFormat="eee dd / LL / yy"
              onChange={(date: Date) => {
                setStartDate(date);
                setEndDate(addDays(date, 1));
              }}
              minDate={new Date()}
              containerClass="mb-3"
              popperClassName="homepage-datepicker"
            />
            <DatePickerInput
              label="Return Date"
              selected={endDate}
              dateFormat="eee dd / LL / yy"
              onChange={(date: Date) => setEndDate(date)}
              minDate={endDate}
              containerClass="mb-3"
              popperClassName="homepage-datepicker"
            />
            <button
              type="button"
              className="border-transparent ml-5 flex  max-w-xs items-center justify-center rounded-md border bg-orange px-4 py-3 text-sm font-medium text-white hover:bg-orange"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
