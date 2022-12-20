import axios from "axios";

// Hooks
import { useMemo, useState } from "react";
import useSWR from "swr";

// Components
import Loader from "../components/Loader";

// Types
import type { NextPage } from "next";
import type { GameEuResult } from "./api/getGames";

// Fetcher => useSWR
const fetcher = (url: string) => axios.get('/api/getGames?limit=100').then((res) => res.data);

// Component
const Home: NextPage = () => {
    return (
      <>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <input
            className="w-full px-4 py-2 placeholder-gray-300 rounded-md outline-none appearance-none md:w-3/5 bg-gray-400/50"
            placeholder="Filter results"
          />

          <div className="flex items-center justify-between w-full space-x-10 md:w-max md:space-x-2">
            <span className="flex-shrink-0">Sort By:</span>

            <select
              className="w-full px-4 py-2 text-center rounded-md appearance-none bg-gray-400/50 focus:outline-none"
            >
              <option value="name-up">Name ⬆️</option>
              <option value="name-down">Name ⬇️</option>
              <option value="popularity-up">Popularity ⬆️</option>
              <option value="popularity-down">Popularity ⬇️</option>
              <option value="price-up">Price ⬆️</option>
              <option value="price-down">Price ⬇️</option>
            </select>
          </div>
        </div>

      {/* Game Content  */}
      </>
    );
};

export default Home;
