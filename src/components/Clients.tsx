import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function createData(
    id: number,
    name: string,
) {
    return {
        id,
        name,
        about: [
            { adress: '2020-01-05', telephoneNumber: '11091700' },
        ],
    };
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell align="left">{row.id}</TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                О клиенте
              </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Адрес</TableCell>
                                        <TableCell>Телефон</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.about.map((aboutRow) => (
                                        <TableRow key={aboutRow.adress}>
                                            <TableCell component="th" scope="row">
                                                {aboutRow.adress}
                                            </TableCell>
                                            <TableCell>{aboutRow.telephoneNumber}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

let id = 0;

const rows = [
    createData(++id, 'Чернов Иван Павлович'),
    createData(++id, 'Князева Анастасия Макаровна'),
    createData(++id, 'Зыкова Аделина Львовна'),
    createData(++id, 'Петрова Полина Андреевна'),
    createData(++id, 'Осипов Даниил Владимирович'),
    createData(++id, 'Исаев Михаил Максимович'),
    createData(++id, 'Власов Тимофей Матвеевич'),
    createData(++id, 'Чернышев Гордей Романович'),
    createData(++id, 'Тарасов Макар Сергеевич'),
    createData(++id, 'Захаров Роман Владимирович'),
    createData(++id, 'Никифорова Алиса Руслановна'),
    createData(++id, 'Демидова Анна Марковна'),
    createData(++id, 'Уткин Марк Николаевич'),
    createData(++id, 'Павлов Андрей Павлович'),
    createData(++id, 'Соболев Тимофей Ильич'),
    createData(++id, 'Воробьев михаил Иванович'),
    createData(++id, 'Сорокин Макар Петрович'),
    createData(++id, 'Поликарпов Марк Русланович'),
    createData(++id, 'Соколова Анна Максимовна'),
    createData(++id, 'ОКасаткин Елисей Вадимович'),
];

export default function CollapsibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell align="left"> ID </TableCell>
                        <TableCell> ФИО </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}