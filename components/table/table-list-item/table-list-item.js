// import './table-list-item.css';

const TableListItem = ({name, days, salary}) => {
  return (
    <div className="table__list-item">
      <div>{name}</div>

      <div>
        <div className="input-group">
          <input type="number" className="form-control" placeholder={days} min="0"></input>
          <div className="input-group-prepend">
            <span className="input-group-text">days</span>
          </div>
        </div>
      </div>

      <div>
        <div className="input-group">
          <input type="number" className="form-control" placeholder={salary} min="0"></input>
          <div className="input-group-prepend">
            <span className="input-group-text">$/day</span>
          </div>
        </div>
      </div>

      <div>150$</div>
    </div>
  )
}

export default TableListItem;