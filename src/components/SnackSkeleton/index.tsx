import { Skeleton } from './design'
import { Skeleton as PrimeSkeleton } from 'primereact/skeleton'

const SnackSkeleton: React.FC = () => {
  return (
    <>
      {Array.from({length: 5}).map((_, index) => (
        <Skeleton key={index}>
          <PrimeSkeleton width='100%' height='8rem' />

          <PrimeSkeleton width='100%' height='1rem' className='mt-1' />
          <PrimeSkeleton width='100%' height='1rem' className='mt-1' />

          <div className="flex gap-2 justify-content-between mt-4 align-items-center">
            <PrimeSkeleton width='8rem' height='3rem' />
            <PrimeSkeleton size='3rem' shape='circle' />
          </div>
        </Skeleton>
      ))}
    </>
  )
}

export default SnackSkeleton
