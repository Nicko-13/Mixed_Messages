const noun = ['I', 'We', 'You', 'They'];
const verb = ['love', 'adore', 'keen on', 'interesting in']
const subject = ['coding', 'learning', 'chatting', 'laughing']

const get_random_message = () => {
    console.log([noun, verb, subject]
                .reduce()
                .join() + '!')
}

const get_random_item = array => {
    return array[Math.floor(Math.random() * array.length)]
}

get_random_message()