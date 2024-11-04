<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Counter App</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
        }
        .counter {
            text-align: center;
            padding: 20px;
            border: 2px solid #333;
            border-radius: 10px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .button {
            margin: 5px;
            padding: 10px 15px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background-color: #007BFF;
            color: white;
        }
        .button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div id="root"></div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js"></script>
    
    <script>
        const { useState } = React;

        function Counter() {
            const [count, setCount] = useState(0);

            return (
                <div className="counter">
                    <h1>{count}</h1>
                    <button className="button" onClick={() => setCount(count + 1)}>Increment</button>
                    <button className="button" onClick={() => setCount(count - 1)}>Decrement</button>
                    <button className="button" onClick={() => setCount(0)}>Reset</button>
                </div>
            );
        }

        ReactDOM.render(<Counter />, document.getElementById('root'));
    </script>
</body>
</html>
    
