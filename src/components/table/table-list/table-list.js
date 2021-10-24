import './table-list.css';
import TableListItem from '../table-list-item';

const TableList = ({props}) => {
  const elements = props.map((item) => {
    const { ...props } = item;

    return (
      <TableListItem {...props } />
    );
  });

  return (
    <div className="table__list">
      { elements }
    </div>
  )
}

export default TableList;