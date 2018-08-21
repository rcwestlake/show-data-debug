var debugModule  = (function() {
  const getRandomNumInRange = (max) => {
    let maxInRange = max
    if(!maxInRange) {
      maxInRange = 1
    }
    return Math.floor(Math.random() * Math.floor(maxInRange))
  }

  const getLength = (data) => {
    if(Array(data)) {
      return data.length
    }
  }

  const createData = (numberOfDataCalls) => {
    if(numberOfDataCalls) {
      if(numberOfDataCalls > dataInDB.length) {
        return new Error('Not enough data in Db. Select lower number.')
      } else {
        return fakeServerEndpoint(numberOfDataCalls)
      }
    } else {
      return fakeServerEndpoint(1)
    }
  }

  const fakeServerEndpoint = (numberOfCalls, existingRecords) => {
    console.log('in fake server endpoint', numberOfCalls)
    let result = []
    if(existingRecords) {
      result = existingRecords
    }

    result.push(dataInDB[getRandomNumInRange(numberOfCalls)])

    if(numberOfCalls > 0) {
      return fakeServerEndpoint(numberOfCalls - 1, result)
    } else {
      return result
    }
  }

  const handleResponse = (result) => {
    if(result) {
      return result
    } else {
      return Error('Unable to find data.')
    }
  }

  const doDBWork = {
    makeSingleCall() {
      const data = createData()
      return handleResponse(data)
    },
    makeMultipleCall(numberOfCalls) {
      const data = createData(numberOfCalls)
      return handleResponse(data)
    }
  }

  const dataInDB = [
    {
      runName: 'Data Set One',
      variables: [
        {
          name: 'counter',
          type: 'number'
        }
      ],
      steps: [
        {
          id: 0,
          comment: 'Fetch Data From Really Important Table',
          data: [
            'test'
          ]
        }
      ]
    },
    {
      runName: 'Data Set Two',
      variables: [
        {
          name: 'TheDate',
          type: 'Date'
        }
      ],
      steps: [
        {
          id: 0,
          comment: 'Do Math',
          data: [
            'test two'
          ]
        }
      ]
    }
  ]

  return {
    Database: doDBWork
  }
})()