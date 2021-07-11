import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movies from "./Movies";
import { bindActionCreators } from "redux";
import { movieActions } from "../redux/actions";
const Input = () => {
  const [inpValue, setInpValue] = useState(null);
  const [dataCheck, setDataCheck] = useState(false);
  const movies = useSelector((state) => state.movieReducer.movies);
  const dispatch = useDispatch();
   const { getMovies } = bindActionCreators(movieActions, dispatch);
  const submitHandler = async (e) => {
    e.preventDefault();
    setDataCheck(false);
    if (inpValue) {
      await getMovies(inpValue);
      setInpValue(null);
      setDataCheck(true);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row p-3">
        <div className="col-md-8 mx-auto">
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Film Ara..."
                value={inpValue}
                onChange={(e) => setInpValue(e.target.value)}
                required
              />
              <button className="btn btn-primary" type="submit">
                Ara
              </button>
            </div>
          </form>
        </div>
      </div>

      {dataCheck ? <Movies /> : null}
    </div>
  );
};

export default Input;
