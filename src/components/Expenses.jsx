const Expenses = () => {
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-white text-6xl pt-10 pb-10">Expense</h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Expense</th>
                <th>Overall Balance</th>
              </tr>
            </thead>
            <tbody>
              {/* row 2 */}
              <tr>
                <th>Sani</th>
                <td>25/07/2023</td>
                <td>20000</td>
                <td>20000</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>Mani</th>
                <td>25/07/2023</td>
                <td>6000</td>
                <td>6000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
