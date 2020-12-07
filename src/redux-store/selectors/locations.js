const selectLocations = (locations, categories, { sortBy, groupBy }) => {
    let selectedLocations = [...locations]
    
    if (sortBy === 'name')
        selectedLocations = selectedLocations.sort((a, b) => a.name.localeCompare(b.name))

    if (groupBy === 'category') {
        const selectedLocations_copy = [...selectedLocations]
        selectedLocations = []
        categories.forEach((category) => {
            selectedLocations = selectedLocations.concat(selectedLocations_copy.filter(location => (location.category === category.id)))
        })
    }

    return selectedLocations
}

export default selectLocations
