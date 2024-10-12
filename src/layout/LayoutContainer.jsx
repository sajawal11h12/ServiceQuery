import { Outlet } from "react-router-dom";


const LayoutContainer = () => {
  return (
    <div className="bg-errie-black min-h-screen">
      
      <main className="relative z-0">
        <Outlet></Outlet>
      </main>
     
    </div>
  );
};

export default LayoutContainer;
