import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Pages/Home";
import AboutScreen from "./Pages/About";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import SearchResultScreen from "./Pages/SearchResult";
import ErrorPage from "./Pages/ErrorPage";

export default function Routess() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomeScreen />} />
				<Route path="/login" element={<Login />} />
				<Route path="/about" element={<AboutScreen />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/profile/:username" element={<Profile />} />
				<Route path="/search_result" element={<SearchResultScreen />} />
				<Route
					path="/search_result/:product"
					element={<SearchResultScreen />}
				/>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	);
}
