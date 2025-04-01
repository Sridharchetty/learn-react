import { useEffect } from "react";
const UserFunc = (props) => {
  useEffect(() => {
    console.log("Component Update");
    return () => console.log("Component Unmounting");
  }, []);
  console.log("Component Mounting");
  return (
    <div className="rounded border p-3 space-y-3">
      <h2>Name: {props.name}</h2>
      <h3>Place: Pune</h3>
      <h4>Contact: sridharan425@gmai.com</h4>
    </div>
  );
};

export default UserFunc;
