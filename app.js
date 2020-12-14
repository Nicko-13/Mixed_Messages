const noun = ['I', 'We', 'You', 'They'];
const verb = ['love', 'adore', 'keen on', 'interesting in']
const subject = ['coding', 'learning', 'chatting', 'laughing']

const get_random_message = () => {
    console.log(get_random_item(noun) + ' ' +
                get_random_item(verb) + ' ' +
                get_random_item(subject) + '!')
}

const get_random_item = array => {
    return array[Math.floor(Math.random() * array.length)]
}

get_random_message()