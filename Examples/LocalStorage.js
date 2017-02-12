// before refreshing the page
localStorage.setItem("testKey","testValue");

// Refresh the page ->
localStorage.getItem("testKey"); // prints "testValue"

// data persists after reload