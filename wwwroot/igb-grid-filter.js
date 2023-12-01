/**
 * Get IGC grid component in the container element that is specified by the selector.
 * 
 * @param {string} gridSelector
 * @returns {Promise<HTMLElement & any>}
 */
const getIgcGrid = async (gridSelector) => {

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    for (let i = 0; i < 500; i++) {
        const grid = document.querySelector(gridSelector);
        if (grid !== null) return grid;
        await delay(10);
    }
    throw new Error(`Grid component could not found: selecter = "${gridSelector}"`);
}

/**
 * Apply filter for the IGC grid component.
 * 
 * @param {string} gridContainerSelector
 * @param {string} columnName
 * @param {any} value
 * @param {"boolean"|"date"|"dateTime"|"number"|"string"|"time"} operandName
 * @param {string} operatorName
 * @param {boolean} ignoreCase
 */
export const filter = async (gridContainerSelector, columnName, value, operandName, operatorName, ignoreCase) => {

    const grid = await getIgcGrid(gridContainerSelector);

    const operand = grid.getFilterFactory()[operandName + "FilteringOperand"];
    if (!operand) throw new Error(`Operand not found: ${operandName}`);

    const operator = operand.operations.find(op => op.name === operatorName);
    if (!operator) throw new Error(`Operator not found: ${operatorName} of ${operandName}`);

    grid.filter(columnName, value, operator, ignoreCase);
}
