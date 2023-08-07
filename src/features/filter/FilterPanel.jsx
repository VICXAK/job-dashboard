import { useSelector, useDispatch } from 'react-redux';
import { selectFilters, removeFilter, clearFilter } from './filter-slice';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

const FilterPanel = () => {
    const currentFilters = useSelector(selectFilters);
    console.log(currentFilters);
    const dispatch = useDispatch();

    if (currentFilters.length === 0) {
        return null;
    }

    return (
        <Card className='filter-panel'>
            <div className='filter-panel-wrapper'>
                <Stack>
                    {currentFilters.map((filter) => (
                        <Badge
                            key={filter}
                            onClick={() => dispatch(removeFilter(filter))}
                            variant='clearable'
                        >
                            {filter}
                        </Badge>
                    ))}
                </Stack>

                <button
                    className='link'
                    onClick={() => dispatch(clearFilter())}
                >
                    Clear
                </button>
            </div>
        </Card>
    );
};

export { FilterPanel };
