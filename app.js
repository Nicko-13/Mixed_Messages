const noun = ['I', 'We', 'You', 'They'];
const verb = ['love', 'adore', 'keen on', 'interesting in']
const subject = ['coding', 'learning', 'chatting', 'laughing']

/**
 * Return random message combined from given arrays
 */
const get_random_message = () => {
    console.log([noun, verb, subject]
                .map(words => get_random_item(words))
                .join(' ') + '!'
                )
}
/**
 * Return random element from the array
 * 
 * @param {Array} array
 */
const get_random_item = array => {
    return array[Math.floor(Math.random() * array.length)]
}

get_random_message()