class codedetails(FormMixin, DetailView):   
    model = codepost
    template_name = 'rsl-code/details.html'
    form_class = commentform

    def get_success_url(self):
        return reverse(codeviewindex)

    def get_context_data(self, **kwargs):
        context = super(codedetails, self).get_context_data(**kwargs)
        context['form'] = commentform(initial={'comment': self.object})
        return context

    def post(self, request, *args, **kwargs):
        self.object = self.get_object()
        form = self.get_form()
        if form.is_valid():
            return self.form_valid(form)
        else:
            return self.form_invalid(form)

    def form_valid(self, form):
        form.owner = self.request.user
        form.comment = form.cleaned_data.get('comment') 
        form.forpost = self.object.title    
        codecomment = form.save(commit=True)
        codecomment.owner = self.request.user
        codecomment.comment = form.cleaned_data.get('comment') 
        codecomment.forpost = self.object.title        
        codecomment.save()
        print(self.object.title)
        return super(codedetails, self).form_valid(form)

    
    def get_context_data(self, **kwargs):
        context = super(codedetails, self).get_context_data(**kwargs)
        context_related = codecomment.objects.filter(forpost=self.object.title)[:20]
        context['related'] = context_related
        return context
