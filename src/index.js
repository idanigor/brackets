module.exports = function check(str, bracketsConfig) {
	let array = []

	function exception() {
		if (
			array.length > 1 &&
			array[array.length - 1] === array[array.length - 2] &&
			(array[array.length - 1] === '|' ||
				array[array.length - 1] === '7' ||
				array[array.length - 1] === '8')
		) {
			array.pop()
			array.pop()
		}
	}
	for (let i = 0; i < str.length; i++) {
		exception()
		let step = false
		for (let j = 0; j < bracketsConfig.length; j++) {
			if (str[i] === bracketsConfig[j][0]) {
				array.push(str[i])
				step = true
			}
		}
		if (step !== true) {
			if (array.length === 0) {
				return false
			} else {
				for (let k = 0; k < bracketsConfig.length; k++) {
					if (
						array[array.length - 1] === bracketsConfig[k][0] &&
						str[i] === bracketsConfig[k][1]
					) {
						array.pop()
					}
				}
			}
		}
	}
	exception()
	return array.length === 0
}
