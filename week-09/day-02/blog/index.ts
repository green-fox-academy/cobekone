class BlogPost {
    authorName: string;
    title: string;
    text: string;
    publicationDate: string;

    constructor(authorname:string, title: string, text: string, publicationDate: string) {
        this.authorName = authorname;
        this.title = title;
        this.text = text;
        this.publicationDate = publicationDate;
    }
}

let post1 = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04.')
let post2 = new BlogPost('Tim Urban', 'Wait but why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10.')
let post3 = new BlogPost('William Turton', 'One Engineer Is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28.')

/* console.log(post1, post2, post3) */

class Blog {
    blogPostStorer: any[];
    constructor() {
        this.blogPostStorer = [];
    }

    add(BlogPost: BlogPost){
        this.blogPostStorer.push(BlogPost)
    }

    delete(int: number){
        this.blogPostStorer.splice(int, 1)
    }

    update(int: number, BlogPost: BlogPost){
        this.blogPostStorer.splice(int, 1, BlogPost)
    }
}

let blogs = new Blog;
blogs.add(post1)
blogs.add(post2)
blogs.add(post3)
blogs.delete(1)
blogs.update(0, post3)
console.log(blogs)