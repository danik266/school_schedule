"use client";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header />

      <main className="flex flex-1 justify-around items-center flex-col md:flex-row gap-10 p-6">
        <img
          src="/photo.svg"
          alt="Logo"
          className="w-80 md:w-120 object-contain"
        />

        <div className="bg-white rounded-xl shadow p-8 w-full max-w-md text-center">
          <h2 className="text-xl font-semibold mb-4">
            Создание расписания<br />Для Гимназии №10 г.Павлодар
          </h2>

          <form className="flex flex-col gap-10">
            <div className="text-left">
              <label className="block mb-1">Логин</label>
              <input
                type="text"
                placeholder="Введите ваш логин..."
                className="w-full border rounded-lg p-3 outline-none"
              />
            </div>

            <div className="text-left relative">
              <label className="block mb-1">Пароль</label>
              <input
                type={show ? "text" : "password"}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Введите ваш пароль..."
                className="w-full border rounded-lg p-3 pr-10 outline-none"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
              >
              <img 
              src={show ? "lasteye.svg" : "eye-hide-svgrepo-com.svg"}
              alt="icon" 
              className="w-8"
              />
              </button>
            </div>

            <p className="text-sm text-gray-500">
              Создавайте, редактируйте и просматривайте школьное расписание онлайн.
            </p>

            <button className="bg-[#0a1c3a] text-white rounded-full py-3 mt-2 hover:bg-blue-900 transition">
              Войти
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
