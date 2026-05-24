/**
 * Label Normalizer for JavaScript QA Utilities
 * 
 * Derived from JavaScript Chapters 3 & 4 concepts:
 * - Assignment, Comparison, Strict Equality
 * - Logical, String, Ternary, typeof
 * - Optional Chaining, Nullish Coalescing
 */

/**
 * Normalizes a label string for JavaScript operator utilities.
 * 
 * Rules:
 * 1. Trim leading and trailing spaces
 * 2. Convert text to lowercase
 * 3. Replace non-alphanumeric groups with a single hyphen
 * 4. Prefix the result with "js-operator-"
 * 
 * @param {string} label - The raw label to normalize
 * @returns {string} - The normalized label
 */
function normalizeOperatorLabel(label) {
    if (typeof label !== 'string') {
        throw new TypeError('Expected a string label');
    }

    return (
        'js-operator-' +
        label
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '')
    );
}

// ============ Test / Demo ============

const operatorLabels = [
    'Assignment Operator',
    '  Comparison Operator  ',
    'Strict Equality (===)',
    'Logical AND',
    'String Concatenation',
    'Ternary Operator',
    'typeof',
    'Optional Chaining',
    'Nullish Coalescing (??)',
    '  Post-Increment  ',
];

console.log('=== JavaScript Operator Label Normalizer ===\n');
operatorLabels.forEach((label) => {
    console.log(`${label.padEnd(30)} -> ${normalizeOperatorLabel(label)}`);
});

// Export for reuse in other modules
module.exports = { normalizeOperatorLabel };
