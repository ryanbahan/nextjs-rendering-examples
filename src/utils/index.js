export const fetchAdvice = async () => {
    let res = await fetch("https://api.adviceslip.com/advice")
    let json = await res.json()

    return json.slip.advice
}

export const styles = {
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    fontSize: "3rem",
    padding: "5rem",
}