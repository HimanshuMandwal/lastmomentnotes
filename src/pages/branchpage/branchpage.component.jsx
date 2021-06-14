import MenuContainer from '../../components/menu-container/menu-container.component';
import NotesFinder from '../../components/notes-finder/notes-finder.component';
import { Route } from 'react-router';
import './branchpage.styles.scss';
const SEM = [
    {
        id : 1,
        imageUrl : 'http://www.smtsalunkabairaut.com/images/sem/semester-1.png',
        name :'semester 1',
        buttonName: 'Go'
    },
    {
        id : 2,
        imageUrl : 'http://www.smtsalunkabairaut.com/images/sem/semester-2.png',
        name :'semester 2',
        buttonName: 'Go'
    },
    {
        id : 3,
        imageUrl : 'http://www.smtsalunkabairaut.com/images/sem/semester-3.png',
        name :'semester 3',
        buttonName: 'Go'
    },
    {
        id : 4,
        imageUrl : 'http://www.smtsalunkabairaut.com/images/sem/semester-4.png',
        name :'semester 4',
        buttonName: 'Go'
    },
    {
        id : 5,
        imageUrl : 'http://www.smtsalunkabairaut.com/images/sem/semester-5.png',
        name :'semester 5',
        buttonName: 'Go'
    },
    {
        id : 6,
        imageUrl : 'http://www.smtsalunkabairaut.com/images/sem/semester-6.png',
        name :'semester 6',
        buttonName: 'Go'
    },
    {
        id : 7,
        imageUrl : 'http://www.smtsalunkabairaut.com/images/sem/semester-7.png',
        name :'semester 7',
        buttonName: 'Go'
    },
    {
        id : 8,
        imageUrl : 'http://www.smtsalunkabairaut.com/images/sem/semester-8.png',
        name :'semester 8',
        buttonName: 'Go'
    },
]

const BranchPage = (props) => {
    console.log(props); //props.match.params.branchId
    return (
        <div>
            <MenuContainer items = {SEM} title='branch' link={`${props.match.url}/sem`}/>
        </div>
    )
}

export default BranchPage;