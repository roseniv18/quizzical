import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import Home from "./pages/Home"
import QuestionList from "./pages/QuestionList"
import ThemeToggler from "./Components/ThemeToggler/ThemeToggler"
import Alert from "./Components/Alert"
import { useGlobalContext } from "./context"

function App() {
    const { alert, theme } = useGlobalContext()

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    return (
        <Router>
            <ThemeToggler />
            <main>
                <Routes>
                    <Route path="/quizzical" element={<Home />}>
                        <Route
                            path="/quizzical/questions"
                            element={<QuestionList />}
                        ></Route>
                    </Route>
                    <Route path="*" element={<h2>Page Not Found</h2>}></Route>
                </Routes>
                {alert.show && <Alert />}
            </main>
        </Router>
    )
}

export default App
