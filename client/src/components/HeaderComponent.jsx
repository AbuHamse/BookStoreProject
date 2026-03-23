import React from "react";
import { Menubar } from "primereact/menubar";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      command: () => navigate("/"),
    },
    {
      label: "Books",
      icon: "pi pi-book",
      command: () => navigate("/books"),
    },
    {
      label: "Categories",
      icon: "pi pi-list",
      items: [
        {
          label: "Fiction",
          command: () => navigate("/books?category=fiction"),
        },
        {
          label: "Non-Fiction",
          command: () => navigate("/books?category=non-fiction"),
        },
        {
          label: "Sci-Fi",
          command: () => navigate("/books?category=scifi"),
        },
      ],
    },
    {
      label: "Add Book",
      icon: "pi pi-plus",
      command: () => navigate("/add-book"),
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
      command: () => navigate("/contact"),
    },
  ];

  const start = (
    <h2 style={{ margin: 0, cursor: "pointer" }} onClick={() => navigate("/")}>
      📚 BookStore
    </h2>
  );

  const end = (
    <div className="flex gap-3">
      <i
        className="pi pi-user cursor-pointer"
        onClick={() => navigate("/login")}
      />
      <i
        className="pi pi-shopping-cart cursor-pointer"
        onClick={() => navigate("/cart")}
      />
    </div>
  );

  return (
    <div className="card">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
};

export default HeaderComponent;