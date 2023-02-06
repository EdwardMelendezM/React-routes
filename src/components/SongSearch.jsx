import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import { helpHttp } from "../helpers/helpHttp";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import Error404 from "../pages/Error404";

const mySongsInitial = JSON.parse(localStorage.getItem("mySongs")) || [];
const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mySongs, setMySongs] = useState(mySongsInitial);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      //console.log(artistUrl, songUrl);

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      //console.log(artistRes, songRes);

      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);
    };

    fetchData();
    localStorage.setItem("mySongs", JSON.stringify(mySongs));
  }, [search, mySongs]);

  const handleSearch = (data) => {
    setSearch(data);
  };
  const handleSaveSong = () => {
    alert("Salvando cancion en favoritas");
  };
  const handleDeleteSong = (id) => {};

  return (
    <div>
      <h2>Song Search</h2>
      <article className="grid-1-3">{loading && <Loader />}</article>
      <HashRouter>
        <header>
          <h2>Son Search</h2>
          <Link to="/">Home</Link>
          <Link to="/canciones">Cancion</Link>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SongForm handleSearch={handleSearch} />
                {search && !loading && (
                  <SongDetails search={search} lyric={lyric} bio={bio} />
                )}
              </>
            }
          />
          <Route path="/canciones/:id" element={<h1>Pagina de canciones</h1>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default SongSearch;
