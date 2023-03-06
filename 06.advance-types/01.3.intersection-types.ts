type Combinable = string | number // Union type
type Numeric = number | boolean

type Universal = Combinable & Numeric // Intersecting (finding common)

// The common is 'number' otherwise showing an error.
const universal: Universal = 22
console.log(universal) // Output: 22

// Note:
// If 'type' is 'object' type then intersecting two 'type' is like Combinable.
// If 'type' is union type then intersecting two 'type' is like finding the common of that.
