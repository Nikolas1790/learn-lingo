import Header from "components/Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <Header />
            <main>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </main>

        </div>
    )
}