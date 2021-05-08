<Loading isLoading={isLoading} />
{articleList &&
  articleList.map((value, key) => (
    <Card className="card" key={key} onClick={() => goToDetail(key)}>
      <div>
        <Card.Img
          variant="top"
          src={
            value.multimedia
              ? value.multimedia.length > 0
                ? `https://static01.nyt.com/${value.multimedia[0].url}`
                : "/noImage.png"
              : "/noImage.png"
          }
        />
      </div>
      <Card.Body>
        <Card.Title>
          {value.headline ? value.headline.main : ""}
        </Card.Title>
        <Card.Text>
          {value.lead_paragraph
            ? value.lead_paragraph.substr(0, 150)
            : ""}
        </Card.Text>
      </Card.Body>
    </Card>
  ))}
{articleList == null ||
  (articleList.length == 0 && !isLoading && (
    <img className="noDataImage" src="nodata.png" />
  ))}