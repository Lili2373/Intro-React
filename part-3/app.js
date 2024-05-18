function App() {
    return (
        <div>
            <Person
                name="BOB"
                age={36}
                hobbies={["bowling", "watching tv", "cooking"]}
            />
            <Person name="Linda" age={34} hobbies={["painting", "gambling"]} />
            <Person
                name="Gene"
                age={8}
                hobbies={["sleeping", "making prank calls"]}
            />
            <Person
                name="Tina"
                age={10}
                hobbies={["reading", "girl scouts", "boys"]}
            />
        </div>
    );
}