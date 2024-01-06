import { Order } from '../../types';
import SubmissionCard from './SubmissionCard';

type SubmissionsListProps = {
  orders: Order[],
};


const SubmissionsList = ({ orders }: SubmissionsListProps) => {

  return (
    <div className='flex flex-col w-11/12 sm:w-4/5 md:w-3/5 lg:w-1/2 gap-5 my-5'>
      {orders.map((order, index) => {
        return <SubmissionCard
                  key={index}
                  order={order}
                  />;
      })}
    </div>
  );
};

export default SubmissionsList;