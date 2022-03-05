// const validator = require('validator')

const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes')

yargs.version('1.0.0')

//Creating add command

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//Creating remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title)
    }
})

//Creating list command
yargs.command({
    command: 'list',
    describe: 'List available notes',
    handler() {
        notes.listNotes()
    }
})

//Creating read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note to be searched',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})


yargs.parse()
//console.log(yargs.argv)


// console.log(validator.isURL('https:/sm96gmail.com'))

// console.log(chalk.green.inverse.bold('Error'))

// console.log(chalk.red(process.argv[2]))

//const fs = require('fs');

//fs.writeFileSync('notes.txt','hello shaurya')

//fs.appendFileSync('notes.txt', '\ntext appended')

//const add = require('./util.js')

//const name = "Shaurya"

// console.log(add(5,7))
