import { BlogsCard, BlogsCardImg, BlogsCardImgWrapper, BlogsCardLink, BlogsCardTextsText, BlogsCardTextsTitle, BlogsWrapper, BlogTexts, BlogTextsText, BlogTextsTitle, BlogWrapper } from "../assets/styles/BlogStyles/blog";
import imageOne from "../assets/images/Image.png";
import imageTwo from "../assets/images/Image (1).png";
import imageThree from "..//assets/images/Image (2).png";

function Blog () {
    return (
        <BlogWrapper>
            <BlogTexts>
                <BlogTextsTitle>
                    Our recent blog
                </BlogTextsTitle>
                <BlogTextsText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                </BlogTextsText>
            </BlogTexts>
            <BlogsWrapper>
                <BlogsCard>
                    <BlogsCardImgWrapper>
                        <BlogsCardImg src={imageOne} alt="Image One" />
                    </BlogsCardImgWrapper>
                    <BlogsCardTextsTitle>
                        The Snap Pixel: How It Works and How to Install 
                    </BlogsCardTextsTitle>
                    <BlogsCardTextsText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                    </BlogsCardTextsText>
                    <BlogsCardLink>
                        Read more
                    </BlogsCardLink>
                </BlogsCard>
                <BlogsCard>
                    <BlogsCardImgWrapper>
                        <BlogsCardImg src={imageTwo} alt="Image Two" />
                    </BlogsCardImgWrapper>
                    <BlogsCardTextsTitle>
                        Global Partner Solutions: A Partnership of Innovation
                    </BlogsCardTextsTitle>
                    <BlogsCardTextsText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                    </BlogsCardTextsText>
                    <BlogsCardLink>
                        Read more
                    </BlogsCardLink>
                </BlogsCard>
                <BlogsCard>
                    <BlogsCardImgWrapper>
                        <BlogsCardImg src={imageThree} alt="Image Three" />
                    </BlogsCardImgWrapper>
                    <BlogsCardTextsTitle>
                        2021: An opportunity for Snapchatters to start fresh 
                    </BlogsCardTextsTitle>
                    <BlogsCardTextsText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                    </BlogsCardTextsText>
                    <BlogsCardLink>
                        Read more
                    </BlogsCardLink>
                </BlogsCard>
            </BlogsWrapper>
        </BlogWrapper>
    )
}

export default Blog;