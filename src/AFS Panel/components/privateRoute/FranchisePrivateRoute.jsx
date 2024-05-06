import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn, setLoggedIn } from "../../redux/franchise/authSlice";

const FranchisePrivateRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const isLoggedInLocalStorage = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn && !isLoggedInLocalStorage) {
      // User is logged in but localStorage says otherwise, log them out
      dispatch(setLoggedIn(false));
    } else if (!isLoggedIn && isLoggedInLocalStorage) {
      // User is logged out but localStorage says they're logged in, log them in
      dispatch(setLoggedIn(true));
    }
  }, [dispatch, isLoggedIn]);

  return isLoggedIn ? <Outlet /> : <Navigate to="/franchise-login" replace />;
};

export default FranchisePrivateRoute;
