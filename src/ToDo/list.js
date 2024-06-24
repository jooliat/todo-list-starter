import date from "./Date";
const formattedDate = date(new Date())
const list = [
    {
        id: 'a',
        task: 'Learn React',
        isComplete: false,
        added :formattedDate,
    },
    {
        id: 'b',
        task: 'Learn GraphQL',
        isComplete: false,
        added :formattedDate,
    },
    {
        id: 'c',
        task: 'Learn TypeScript',
        isComplete: false,
        added :formattedDate,
       
    },
    {
        id: 'd',
        task: 'Build a portfolio website',
        isComplete: false,
        added :formattedDate,
       
    },
    {
        id: 'e',
        task: 'Contribute to open source',
        isComplete: false,
        added :formattedDate,
       
    },
    {
        id: 'f',
        task: 'Read a book on JavaScript design patterns',
        isComplete: false,
        added :formattedDate,
 
    },
    {
        id: 'g',
        task: 'Complete a coding challenge on LeetCode',
        isComplete: false,
        added :formattedDate,
      
    },
    {
        id: 'h',
        task: 'Watch a tutorial on Node.js',
        isComplete: false,
        added :formattedDate,
       
    },
];

export default list;