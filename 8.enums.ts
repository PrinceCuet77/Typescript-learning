enum SeatChoice {
    AISLE, // Default is 0 and incease so on.
    MIDDLE,
    WINDOW
}

// If I 
const seat: number = 1
if (seat == SeatChoice.MIDDLE) {
    console.log(SeatChoice.MIDDLE)
}

// I can't change the default value
enum SeatChoice1 {
    AISLE = 10, // Now it's 10.
    MIDDLE, // 11
    WINDOW, // 12
}

// And also do it like that
enum SeatChoice2 {
    AISLE, // It's 0.
    MIDDLE, // 1
    WINDOW = 12, // So, it's 12
    FORTH // 13
}

export {}
