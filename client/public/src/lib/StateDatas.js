class ObservableState {
    constructor(initialState) {
        this.state = initialState;
        this.listeners = [];
    }

    setState(newState) {
        const prevState = { ...this.state };
        this.state = { ...this.state, ...newState };
        this.notifyListeners(this.state, prevState);
    }

    notifyListeners(newState, prevState) {
        this.listeners.forEach(listener => listener(newState, prevState));
    }

    subscribe(listener) {
        this.listeners.push(listener);
    }

    unsubscribe(listener) {
        this.listeners = this.listeners.filter(l => l !== listener);
    }
}

const BrothState = new ObservableState({ brothSelected: null });

export function setBrothSelected(broth) {
    BrothState.setState({ brothSelected: broth });
}

export function onBrothChange(listener) {
    BrothState.subscribe(listener);
}

const ProteinState = new ObservableState({ proteinSelected: null });

export function setProteinSelected(protein) {
    ProteinState.setState({ proteinSelected: protein });
}

export function onProteinChange(listener) {
    ProteinState.subscribe(listener);
}

export function setWidgetBroth(scroll) {
    ProteinState.setState({ scrollWidgetBrothSelected: scroll });
}





