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
    adress: string,
    telephoneNumber: string,
) {
    return {
        id,
        name,
        adress,
        telephoneNumber,
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
                                        <TableRow key={row.adress}>
                                            <TableCell component="th" scope="row">
                                                {row.adress}
                                            </TableCell>
                                            <TableCell>{row.telephoneNumber}</TableCell>
                                        </TableRow>
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
    createData(++id, 'Чернов Иван Павлович', 'Челябинская область г.Челябинск ул.Тимирязева д.21 кв.103', '+7(351)422-49-89'),
    createData(++id, 'Князева Анастасия Макаровна', 'Владимирская область г.Владимир просп.Крайнова д.14 кв.40', '+7(4922)75-65-70'),
    createData(++id, 'Зыкова Аделина Львовна', 'Вологодская область г.Череповец просп.Ленина д.165 кв.4', '+7(8202)38-38-93'),
    createData(++id, 'Петрова Полина Андреевна', 'Республика Татарстан г.Набережные Челны просп.Усманова д.8 кв.413', '+7(8552)22-54-29'),
    createData(++id, 'Осипов Даниил Владимирович', 'Магаданская область г.Магадан ул.Гагарина д.50 кв.45', '+7(4132)35-79-50'),
    createData(++id, 'Исаев Михаил Максимович', 'Ханты-Мансийский АО г.Нижневартовск ул.Мира д.27/2 кв.113', '+7(3466)65-69-22'),
    createData(++id, 'Власов Тимофей Матвеевич', 'Самарская область г.Самара просп.Силина д.6 кв.83', '+7(846)165-57-14'),
    createData(++id, 'Чернышев Гордей Романович', 'Республика Татарстан г.Казань просп.Фучика д.83 д.284', '+7(843)982-15-95'),
    createData(++id, 'Тарасов Макар Сергеевич', 'Республика Кабардино-Балкария г.Нальчик ул.Кирова д.3 кв.88', '+7(8662)26-81-91'),
    createData(++id, 'Захаров Роман Владимирович', 'Красноярский край г.Красноярск просп.Фурманова д.39', '+7(391)422-95-74'),
    createData(++id, 'Никифорова Алиса Руслановна', 'Ханты-Мансийский АО г.Нижневартовск ул.Ханты-Мансийская д.21/2 кв.124', '+7(3466)93-79-35'),
    createData(++id, 'Демидова Анна Марковна', 'Республика Татарстан г.Казань просп.Чишмале д.15 кв.186', '+7(843)335-42-33'),
    createData(++id, 'Уткин Марк Николаевич', 'Республика Карелия г.Петрозаводск просп.Кемская д.9 кв.18', '+7(8142)33-65-45'),
    createData(++id, 'Павлов Андрей Павлович', 'Челябинская область г.Челябинск ул.Братьев Кашириных д.101/А', '+7(351)598-43-89'),
    createData(++id, 'Соболев Тимофей Ильич', 'Ханты_Мансийский АО г.Новый Уренгой ул.Советская д.3/3 кв.13', '+7(3494)97-24-87'),
    createData(++id, 'Воробьев михаил Иванович', 'Приморский край г.Владивосток ул.Лермонтова д.751 кв.50', '+7(4232)95-15-30'),
    createData(++id, 'Сорокин Макар Петрович', 'Челябинская область г.Магнитогорск ул.Карла Маркса д.186 кв.71', '+7(3519)96-31-87'),
    createData(++id, 'Поликарпов Марк Русланович', 'Новосибирская область г.Новосибирск просп.Кропоткина д.128/3 кв.224', '+7(383)727-63-26'),
    createData(++id, 'Соколова Анна Максимовна', 'Воронежская область г.Воронеж ул.Туполева д.34 кв.42', '+7(4732)11-69-65'),
    createData(++id, 'ОКасаткин Елисей Вадимович', 'Саратовская область г.Саратов ул.Беговая д.10 кв.19', '+7(8452)79-96-51'),
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
