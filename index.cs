class Buffer {
    string Get() & async Put(string s) {
        return s;
    }
}

class OneCell {
    public OneCell() {
        empty();
    }

    public void Put(Object o) & async empty() {
        contains(o);
    }

    public Object Get() & async contains(Object o) {
        empty();
        return o;
    }
}
